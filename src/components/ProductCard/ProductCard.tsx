import { Card, Group, Image, Text } from "@mantine/core";
import HeartIcon from "../../images/iconHeart.svg";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  key: number;
  image: string;
  title: string;
  price: number;
  oldPrice: number | null;
}

export function ProductCard({
  image,
  title,
  price,
  oldPrice,
}: ProductCardProps) {
  return (
    <Card className={styles.productCard}>
      <Card.Section className={styles.imageSection}>
        <Image
          src={new URL(image, import.meta.url).href}
          className={styles.productImage}
        />
        <Image src={HeartIcon} className={styles.heartIcon} />
      </Card.Section>
      <Card.Section className={styles.contentSection}>
        <Text className={styles.productTitle}>{title}</Text>
        <Group className={styles.priceGroup}>
          {oldPrice && <Text className={styles.oldPrice}>{oldPrice}</Text>}
          <Text className={styles.price}>{price}</Text>
          <Text className={styles.currency}>{"руб."}</Text>
        </Group>
      </Card.Section>
    </Card>
  );
}
