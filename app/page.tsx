import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {

  return (
    <div>
      <div>
        Test
      </div>

      <Image
        src={'/assets/2.jpeg'}
        alt={'sdf'}
        width="64"
        height="64"
      />

    </div>
  );
}
