import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center justify-center min-h-[60vh]">
          <h1 className="text-5xl font-bold">Hello Lambda! 👋</h1>
        </div>
      </main>
    </div>
  );
}
