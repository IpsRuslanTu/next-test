import styles from "./page.module.css";
import Image from "next/image";
import AAaa from "@/app/components/AAaa";

export const revalidate = 3600

const fetchCategories = async (companyId: string): Promise<any> => {
  try {
    const aa = await fetch('google.com')

    return 'succ'
  } catch (e) {
    return 'asfsd'
  }
}

export default async function page({searchParams}: {
  searchParams?: {
    page?: number
    limit?: number
    category?: string
    sort?: string
    filter?: string
  }
}) {

  const categories = await fetchCategories(searchParams?.filter ?? 'v')


  return <AAaa categories={categories} />;
}
