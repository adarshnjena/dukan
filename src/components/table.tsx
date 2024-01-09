import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaCaretDown } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { PaginationComp } from "./pagination";

export default function TableComp() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F2F2F2] rounded-[4px]">
            <TableHead className="">Order ID</TableHead>
            <TableHead className="text-center">
              <p>
                Order date
                <FaCaretDown className="inline-block ml-1" />
              </p>
            </TableHead>
            <TableHead className="text-right">Order amount</TableHead>
            <TableHead className="text-right">
              <p>
                Transaction fees
                <IoIosInformationCircleOutline className="inline-block ml-1" />
              </p>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          {[...Array(10)].map((_, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium text-[#146EB4]">
                #281209{" "}
              </TableCell>
              <TableCell className="text-center">7 July, 2023</TableCell>
              <TableCell className="text-right">₹1,278.23</TableCell>
              <TableCell className="text-right">₹22</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationComp />
    </>
  );
}
