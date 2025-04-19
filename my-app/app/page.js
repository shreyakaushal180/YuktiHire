"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash.includes("access_token")) {
      router.replace("/dashboard");
    }
  }, [router]);

  return (
   <div><h6>hii</h6>hii</div>
  );
}
