import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <div>
        <h1>Hello World !!</h1>

        <button className="btn btn-primary">Button</button>

        <div>
          <ThemeSwitch />
        </div>
      </div>
    </main>
  );
}
