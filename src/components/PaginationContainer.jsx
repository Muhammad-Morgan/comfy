import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const handleClick = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  const activeBtn = (pageNumber) => {
    return `join-item btn-sm md:btn-md btn ${
      pageNumber === page ? "btn-active" : ""
    }`;
  };
  if (pageCount < 2) return null;

  return (
    <section className="flex justify-end py-7">
      <div className="join self-end">
        <button
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handleClick(prevPage);
          }}
          className="join-item items-center text-md md:text-xl lg:text-2xl btn-sm md:btn-md btn"
        >
          «
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => handleClick(pageNumber)}
              className={activeBtn(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handleClick(nextPage);
          }}
          className="join-item items-center text-md md:text-xl lg:text-2xl btn-sm md:btn-md btn"
        >
          »
        </button>
      </div>
    </section>
  );
};

export default PaginationContainer;
