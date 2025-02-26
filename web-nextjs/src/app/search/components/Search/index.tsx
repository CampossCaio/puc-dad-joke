"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./styles.module.css";
import { Button } from "@src/components/Button";
import { useState } from "react";

export function Search() {
  const [searchedTerm, setSearchedTerm] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch() {
    const params = new URLSearchParams(searchParams);

    if (searchParams) {
      params.set("query", searchedTerm);
      replace(`${pathname}?${params.toString()}`);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className={styles.search}>
      <input
        value={searchedTerm}
        onChange={(e) => setSearchedTerm(e.target.value)}
        type="text"
        placeholder="Search terms..."
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}
