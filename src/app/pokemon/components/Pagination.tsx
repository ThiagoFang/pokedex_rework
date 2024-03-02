"use client";

import { Text } from "@/components";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useEffect, useState } from "react";
import { getPokemonList } from "@/utils/fetch/getPokemon";

import Link from "next/link";

interface Props {
  page: number;
}

export const Pagination = ({ page }: Props) => {
  const [hasNextPage, setHasNextPage] = useState(true);

  const handleVerifyNextPage = async () => {
    const response = await getPokemonList(page + 1);
    setHasNextPage(!!response?.length);
  }

  useEffect(() => {
    handleVerifyNextPage();
  }, [page]);

  return (
    <div className="p-4 flex items-center gap-2 w-max mx-auto pt-0 select-none">
      <Link
        draggable={false}
        href={{
          pathname: "/pokemon",
          query: { page: page > 1 ? page - 1 : 1 }
        }}
        className="flex items-center group justify-center p-1 rounded-full dark:bg-dark-container shadow-md dark:shadow-slate-950/10 shadow-slate-200 bg-white"
      >
        <ChevronLeft className="stroke-gray-600 dark:text-gray-200" />
      </Link>


      <Link
        href={{
          pathname: "/pokemon",
          query: { page: 1 }
        }}
        draggable={false}
        className="flex items-center group justify-center py-1 px-2.5 rounded-lg dark:bg-dark-container shadow-md dark:shadow-slate-950/10 shadow-slate-200 bg-white"
      >
        <Text className="text-base text-gray-600">
          1
        </Text>
      </Link>

      {page > 1 &&
        <Text>...</Text>
      }

      {page > 1 &&
        <Link
          href={{
            pathname: "/pokemon",
            query: { page: page }
          }}
          draggable={false}
          className="flex items-center group justify-center py-1 px-2.5 rounded-lg dark:bg-dark-container shadow-md dark:shadow-slate-950/10 shadow-slate-200 bg-white"
        >
          <Text className="text-base text-gray-600">
            {page}
          </Text>
        </Link>
      }

      {hasNextPage &&
        <Link
          href={{
            pathname: "/pokemon",
            query: { page: page + 1 }
          }}
          draggable={false}
          className="flex items-center group justify-center py-1 px-2.5 rounded-lg dark:bg-dark-container shadow-md dark:shadow-slate-950/10 shadow-slate-200 bg-white"
        >
          <Text className="text-base text-gray-600">
            {page + 1}
          </Text>
        </Link>
      }

      <Link
        draggable={false}
        href={{
          pathname: "/pokemon",
          query: { page: page + 1 }
        }}
        className="flex items-center group justify-center p-1 rounded-full dark:bg-dark-container shadow-md dark:shadow-slate-950/10 shadow-slate-200 bg-white"
      >
        <ChevronRight className="stroke-gray-600 dark:text-gray-200" />
      </Link>
    </div>
  )
}
