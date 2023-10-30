import styles from "./QuizResults.module.scss";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { getProducts } from "../../serices/products/products.service";
import { useEffect, useState } from "react";
import { Loader, Pagination } from "@mantine/core";
import type { Product } from "../../serices/products/products.service";
import { Header } from "../../components/Header/Header";

export function QuizResults() {
  const [products, setProducts] = useState<Product[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getProducts().then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  const resultCards = products?.map((item) => {
    return (
      <ProductCard
        key={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
        oldPrice={item.oldPrice}
      />
    );
  });
  return (
    <>
      <Header
        title={"Результат"}
        subTitle={" Мы подобрали для вас наиболее подходящие средства"}
      />
      {loading && (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      )}
      {!loading && (
        <>
          <div className={styles.cardsWrapper}> {resultCards} </div>
          <Pagination
            withControls={false}
            total={13}
            size={"xs"}
            className={styles.pagination}
          />
        </>
      )}
    </>
  );
}
