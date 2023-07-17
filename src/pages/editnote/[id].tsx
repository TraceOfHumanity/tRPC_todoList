import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { trpc } from "../../utils/trpc";

interface FormData {
  title: String;
  description: String;
	id: String;
}

const Editnote: NextPage = () => {
  const utils = trpc.useContext();
  const [data, setData] = useState<FormData>({
    title: "",
    description: "",
    id: "",
  });
  const router = useRouter();
  const NotesId = router.query.id as string;
  const { data: messageDetail, isLoading } = trpc.mynotes?.detailNote.useQuery({
    id: NotesId,
  });

  useEffect(() => {
    setData({
      title: messageDetail?.title,
      description: messageDetail?.description,
      id: messageDetail?.id,
    });
  }, []);

  const updateNewNote = trpc.mynotes.updateNote.useMutation({
    onMutate: () => {
      utils.mynotes.allNotes.cancel();
      const optimisticUpdate = utils.mynotes.allNotes.getData();

      if (optimisticUpdate) {
        utils.mynotes.allNotes.setData(optimisticUpdate);
      }
    },
    onSettled: () => {
      utils.mynotes.allNotes.invalidate();
      utils.mynotes.detailNote.invalidate();
    },
  });

  const handelDescriptionChange = (event) => {
    setData({
      ...data,
      description: event.target.value,
    });
  };

  const handelTitleChange = (event) => {
    setData({
      ...data,
      title: event.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex min-h-screen flex-col justify-center px-2 py-10   bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Link
          className="indigo-700 inline-block py-4 text-base font-semibold leading-7 text-green-700"
          href="/"
        >
          Go back
        </Link>
        <h1 className="mb-6 text-left text-3xl font-bold tracking-tight text-gray-500">
          Edit your note
        </h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            updateNewNote.mutate({
              title: data.title,
              description: data.description,
              id: data.id,
            });
            setData({
              title: "",
              description: "",
            });
          }}
        >
          <input
            type="text"
            required
            value={data?.title}
            placeholder="Your title"
            onChange={(event) => handelTitleChange(event)}
            className="border-1 mb-2 block w-full rounded-sm border-green-800 bg-neutral-100 px-4 py-2 focus:outline-none"
          />
          <textarea
            type="text-area"
            required
            value={data?.description}
            placeholder="Your description"
            onChange={(event) => handelDescriptionChange(event)}
            className="border-1 mb-2 block w-full rounded-sm border-green-800 bg-neutral-100 px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="block w-full rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-600 hover:bg-green-700 hover:ring-green-700"
          >
            Add a note
          </button>
        </form>
      </main>
    </>
  );
};

export default Editnote;
