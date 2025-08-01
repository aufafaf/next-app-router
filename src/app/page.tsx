import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
  ),
  title: "Home - AUFA ANGGARA",
  description: "Belajar NextJs",
  authors: [
    {
      name: "Aufa",
      url: "",
    },
  ],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Home - AUFA ANGGARA",
  },
};

export default function Home() {
  // throw new Error('Something went wrong!!!');
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-100vh p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Hello World
      </main>
    </div>
  );
}
