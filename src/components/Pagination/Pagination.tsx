// import styles from "./Pagination.module.scss";
import { useState } from "react";
import { Container, Text, Button } from "@mantine/core";

interface Pagination {
  total: number;
}
export function Pagination({ total }: Pagination) {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Array.from({ length: total }, (_, index) => index + 1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <Container>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => handlePageChange(page)}
          style={{
            border: "none",
            background: "none",
            padding: "4px 8px",
            marginRight: "4px",
            fontWeight: currentPage === page ? "bold" : "normal",
          }}
        >
          <Text>{page}</Text>
        </Button>
      ))}
    </Container>
  );
}
