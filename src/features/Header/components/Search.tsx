import SearchIcon from "@/assets/Header/search.svg?react";

export default function Search() {
  return (
    <div className="search">
      <SearchIcon className="search__icon" />
      <input type="text" placeholder="Поиск..." className="search__input" />
    </div>
  );
}
