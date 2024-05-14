"use client";
import Image from "next/image";

export default function Home() {
  const click = async () => {
    const objectWithData = { test: "111", hello: "23333" };
    fetch("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectWithData),
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>hello world</div>
      <button onClick={() => click()}>click</button>
    </main>
  );
}
