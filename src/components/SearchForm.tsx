"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!searchText) return;
    router.push(`/events/${searchText}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[600px]">
      <input
        className="w-full h-16 bg-white/[7%] rounded-lg px-6 outline-none ring-mainGreen/50 focus:ring-2 focus:bg-white/10 transition"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search events"
        spellCheck="false"
      />
    </form>
  );
}

export default SearchForm;
