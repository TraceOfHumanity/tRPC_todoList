import Head from "next/head";
import Link from "next/link";
// import { api } from "~/utils/api";

interface FormData {
  title: String;
  description: String;
}

export default function NewNote() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-2 text-white">
        <Link
          className="indigo-700 inline-block py-4 text-base font-semibold leading-7 text-green-700"
          href="/"
        >
          Go back
        </Link>
        <h1 className="mb-6 text-left text-3xl font-bold tracking-tight text-gray-900">
          Add new notes
        </h1>
        {/* <form
          onSubmit={(event) => {
            event.preventDefault();
            addNewNote.mutate({
              title: data.title,
              description: data.description,
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
            value={data.title}
            placeholder="Your title"
            onChange={(event) => handelTitleChange(event)}
            className="border-1 mb-2 block w-full rounded-sm border-green-800 bg-neutral-100 px-4 py-2 focus:outline-none"
          />
          <textarea
            type="text-area"
            required
            value={data.description}
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
        </form> */}
      </main>
    </>
  );
}
