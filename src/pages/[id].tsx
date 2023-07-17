import { useRouter } from "next/router";
import Link from "next/link";
import { trpc } from "../utils/trpc";

export default function NotesDetail() {
  const router = useRouter();
  const NotesId = router.query.id as string;
  const { data: messageDetail, isLoading } = trpc.mynotes?.detailNote.useQuery({
    id: NotesId,
  });

  if (isLoading) return <>Loading...</>;

  return (
    <>
      <main className="text-white mx-auto flex min-h-screen flex-col px-2 py-10  bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Link
          className="indigo-700 inline-block py-4 text-base font-semibold leading-7 text-green-700"
          href="/"
        >
          Go back
        </Link>
        <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-left sm:text-3xl text-gray-600">
          Note details
        </h1>
        {/* <div className="mb-5">{messageDetail?.id}</div> */}
        <h2 className="mb-5 font-bold text-xl">{messageDetail?.title}</h2>
        <p className="mb-5">{messageDetail?.description}</p>
      </main>
    </>
  );
}
