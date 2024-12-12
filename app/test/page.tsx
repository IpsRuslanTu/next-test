import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home(props: {searchParams?: Promise<{query?: string, page?: string }> }) {
  // const query = props.searchParams?.query || ''
  // const currentPage = Number(searchParams?.page) || 1

  return (
    <div>
      Test page
    </div>
  );
}
