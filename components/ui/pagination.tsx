import * as React from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="ui-pagination" role="navigation" aria-label="Pagination">
      <button onClick={() => onPageChange(Math.max(1, page - 1))} disabled={page === 1} aria-label="Previous page">
        ‹
      </button>
      {pages.map((p) => (
        <button key={p} data-active={p === page} onClick={() => onPageChange(p)} aria-current={p === page ? "page" : undefined}>
          {p}
        </button>
      ))}
      <button onClick={() => onPageChange(Math.min(totalPages, page + 1))} disabled={page === totalPages} aria-label="Next page">
        ›
      </button>
    </div>
  );
}
