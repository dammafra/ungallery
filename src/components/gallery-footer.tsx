import { NavbarContent, Navbar as NextUINavbar } from "@nextui-org/navbar";
import { Pagination } from "@nextui-org/pagination";
import { useSearch } from "@providers/search/use-search";

export const GalleryFooter = () => {
  const { totalPages, page, setPage, loading } = useSearch();

  if (totalPages <= 1) return <></>;

  return (
    <NextUINavbar
      as="footer"
      maxWidth="xl"
      position="sticky"
      className="bottom-0 animate-fade-up animate-duration-500"
    >
      <NavbarContent justify="center" className="w-full">
        <Pagination
          isDisabled={loading}
          isCompact
          showControls
          total={totalPages}
          initialPage={1}
          page={page}
          onChange={(page) => {
            setPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </NavbarContent>
    </NextUINavbar>
  );
};
