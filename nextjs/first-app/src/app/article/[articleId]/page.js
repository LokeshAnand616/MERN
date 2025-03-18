import Link from "next/link";

export default function Article({ params, searchParams }) {
  const { id } = params;
  const { lang } = searchParams;

  return (
    <>
      <h1>This is a new website</h1>
      <p>Reading in language: {lang}</p>
      <div>
        <Link href={`/article/${id}?lang=en`}>English</Link>
        <Link href={`/article/${id}?lang=fr`}>French</Link>
      </div>
    </>
  );
}
