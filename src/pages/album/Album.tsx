import AlbumInfo from "@/components/album/album-info/AlbumInfo";
import CustomTable from "@/components/custom-table/CustomTable";
import { Skeleton } from "@/components/ui/skeleton";
import { headsData } from "@/constants";
import { useGetSingleAlbumTracksQuery } from "@/store/services/album/getAlbumApi";
import { useParams } from "react-router-dom";

const Album = () => {
  const { albumId } = useParams();

  const { isLoading: allTrackLoading, data: allTrackData } =
    useGetSingleAlbumTracksQuery(
      { albumId },
      {
        skip: !albumId,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
      }
    );

  function renderTableRows(value: any) {
    if (!value && !value?.length) return;
    const tableContent = value?.map((item: any, index: number) => (
      <tr className="border-b border-solid border-[#dadada46]" key={index}>
        <td className="text-white lg:text-[15px] md:text-[14px] text-[12px] py-4">
          {index + 1}
        </td>
        <td className="py-4">
          <div className="flex items-center justify-start gap-2">
            <span className="text-white lg:text-[15px] md:text-[14px] text-[12px]">
              {item?.name}
            </span>
          </div>
        </td>
        <td
          colSpan={1}
          className="text-white lg:text-[15px] md:text-[14px] text-[12px] py-4"
        >
          {item?.artists?.[0]?.name}
        </td>
        <td className="text-white lg:text-[15px] md:text-[14px] text-[12px] py-4">
          2023-01-01
        </td>
        <td className="text-white lg:text-[15px] md:text-[14px] text-[12px] py-4">
          3:00
        </td>
      </tr>
    ));
    return tableContent;
  }

  function renderTableHeads(heads: any) {
    if (!heads && typeof heads !== "object") return;

    const tableHeads = (
      <tr>
        <th colSpan={1} className="text-white text-start pb-5">
          #
        </th>
        <th colSpan={1} className="text-white text-start pb-5">
          {heads?.songName}
        </th>
        <th colSpan={1} className="text-white text-start pb-5">
          {heads?.artistName}
        </th>
        <th colSpan={1} className="text-white text-start pb-5">
          {heads?.datePublished}
        </th>
        <th className="text-white text-start pb-5">
          <figure className="img_wrap h-5 w-5">
            <img
              src={heads?.clockIcon}
              alt="Clock Icon"
              className="h-full w-full object-cover"
            />
          </figure>
        </th>
      </tr>
    );

    return tableHeads;
  }

  return (
    <main id="album">
      <AlbumInfo />
      {allTrackLoading ? (
        <Skeleton className="min-h-[800px] w-full rounded-sm" />
      ) : (
        <CustomTable
          tableData={allTrackData?.items}
          renderTableRows={renderTableRows}
          renderTableHeads={renderTableHeads}
          tableHeadData={headsData}
        />
      )}
    </main>
  );
};

export default Album;
