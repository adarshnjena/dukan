"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

export function PaginationComp() {
  const [currentPage, setCurrentPage] = useState(10);

  return (
    <Pagination className="mt-[24px]">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="font-normal border rounded-[4px] border-[#D9D9D9]"
            onClick={() =>
              setCurrentPage(
                currentPage === 0
                  ? currentPage
                  : currentPage === 10
                  ? 0
                  : currentPage - 1
              )
            }
          />
        </PaginationItem>

        <PaginationItem
          className={
            currentPage === 0 ? "bg-[#146EB4] text-white rounded-[4px]" : ""
          }
        >
          <PaginationLink className="font-normal">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {[...Array(18)].map((_, i) => (
          <>
            {i >= 9 ? (
              <PaginationItem
                className={
                  i + 1 === currentPage
                    ? "bg-[#146EB4] text-white rounded-[4px]"
                    : ""
                }
              >
                <PaginationLink
                  className="font-normal"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ) : (
              <></>
            )}
          </>
        ))}

        <PaginationItem>
          <PaginationNext
            className="font-normal border rounded-[4px] border-[#D9D9D9]"
            onClick={
              currentPage === 18
                ? () => setCurrentPage(currentPage)
                : currentPage === 0
                ? () => setCurrentPage(10)
                : () => setCurrentPage(currentPage + 1)
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
