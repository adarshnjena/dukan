import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationComp() {
  return (
    <Pagination className="mt-[24px]">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="font-normal border rounded-[4px] border-[#D9D9D9]"
            href="#"
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink className="font-normal" href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {[...Array(18)].map((_, i) => (
          <>
            {i >= 9 ? (
              <PaginationItem>
                <PaginationLink className="font-normal" href="#">
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
            href="#"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
