import { ReactNode } from "react";

interface TableProps {
  renderTableRows: (args: []) => ReactNode;
  renderTableHeads: (args: String[]) => ReactNode;
  tableData: any;
  tableHeadData: any;
}

const CustomTable = ({
  renderTableRows,
  renderTableHeads,
  tableData,
  tableHeadData,
}: TableProps) => {
  return (
    <section className="table-section">
      <table className="w-full">
        <thead className="border-b border-solid border-[#dadada46]">
          {renderTableHeads(tableHeadData)}
        </thead>
        <tbody className="w-full">{renderTableRows(tableData)}</tbody>
      </table>
    </section>
  );
};

export default CustomTable;
