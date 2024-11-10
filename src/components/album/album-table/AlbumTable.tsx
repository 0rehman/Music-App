import clockIcon from "@/assets/images/clock_icon.png";
import mainImg from "@/assets/images/img1.jpg";
import { ReactNode } from "react";

interface AlbumTableProps {
  renderTableRows: () => ReactNode;
  renderTableHeads: () => ReactNode;
}

const AlbumTable = ({ renderTableRows, renderTableHeads }: AlbumTableProps) => {
  return (
    <section className="album-table-section">
      <table className="w-full">
        <thead className="border-b border-solid border-[#dadada46]">
          {renderTableHeads()}
          <tr>
            <th colSpan={1} className="text-white text-start pb-5">
              #
            </th>
            <th colSpan={1} className="text-white text-start pb-5">
              Title
            </th>
            <th colSpan={1} className="text-white text-start pb-5">
              Album
            </th>
            <th colSpan={1} className="text-white text-start pb-5">
              Date Added
            </th>
            <th className="text-white text-start pb-5">
              <figure className="img_wrap h-5 w-5">
                <img
                  src={clockIcon}
                  alt="Clock Icon"
                  className="h-full w-full object-cover"
                />
              </figure>
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {renderTableRows()}
          <tr className="border-b border-solid border-[#dadada46]">
            <td className="text-white lg:text-[15px] md:text-[14px] text-[12px] py-4">
              1
            </td>
            <td className="py-4">
              <div className="flex items-center justify-start gap-2">
                <figure className="img_wrap h-10 w-10 overflow-hidden">
                  <img
                    src={mainImg}
                    alt="Song One"
                    className="h-full w-full object-cover"
                  />
                </figure>
                <span className="text-white lg:text-[15px] md:text-[14px] text-[12px]">
                  Song One
                </span>
              </div>
            </td>
            <td
              colSpan={1}
              className="text-white lg:text-[15px] md:text-[14px] text-[12px] py-4"
            >
              Album One
            </td>
            <td className="text-white lg:text-[15px] md:text-[14px] text-[12px] py-4">
              2023-01-01
            </td>
            <td className="text-white lg:text-[15px] md:text-[14px] text-[12px] py-4">
              3:00
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AlbumTable;
