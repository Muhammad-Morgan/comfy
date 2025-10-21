import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleClick = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <section className="flex justify-end py-7">
      <div className="join self-end">
        <button
          className="join-item items-center text-md md:text-xl lg:text-2xl btn-sm md:btn-md btn"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handleClick(prevPage);
          }}
        >
          «
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => handleClick(pageNumber)}
              className={`join-item btn-sm md:btn-md btn ${
                pageNumber === page ? "btn-active" : ""
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="join-item items-center text-md md:text-xl lg:text-2xl btn-sm md:btn-md btn"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handleClick(nextPage);
          }}
        >
          »
        </button>
      </div>
    </section>
  );
};

export default PaginationContainer;
