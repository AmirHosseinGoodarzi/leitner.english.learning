import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import client from "@/utils/AxiosInterceptor";
import useAuth from "@/hooks/useAuth";
import { CategoryEnum } from "@/utils/enums";
import toast from "react-hot-toast";
import ROUTES_OBJECT from "@/utils/RoutesObject";
import useCategory from "@/hooks/useCategory";
import { useRouter } from "next/navigation";

export const useGetAllWords = () => {
  const category = useCategory();
  const { user } = useAuth();
  return useQuery(["WORD_LIST", category], async () => {
    const { data } = await client.post("/words", {
      category,
      user: user.email,
    });
    if (!data.status) {
      Swal.fire({
        icon: "error",
        title: "error",
        text: data.message,
      });
      return;
    }
    return data.data;
  });
};

export const useRebuildWords = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  return useMutation(
    async () => await client.post("/words/rebuild", { user: user.email }),
    {
      onSuccess: ({ data }) => {
        if (!data.status) {
          Swal.fire({
            icon: "error",
            title: "error",
            text: data.message,
          });
          return;
        }
        queryClient.invalidateQueries(["WORD_LIST"]);
      },
    }
  );
};

export const useAddEditWord = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  return useMutation(
    async (requestBody: { _id?: string; front: string; back: string }) => {
      const { data } = await client.post("/words/addOrEdit", {
        user: user.email,
        ...requestBody,
      });
      return data;
    },
    {
      onSuccess: (response, value) => {
        if (response.status) {
          let message = "";
          if (!value._id) {
            message = "New word added";
          } else {
            message = `${value.front} updated`;
          }
          queryClient.invalidateQueries(["WORD_LIST"]);
          toast.success(message);
        } else {
          Swal.fire({
            icon: "error",
            title: "error",
            text: response.message,
          });
        }
      },
    }
  );
};

export const useGetCardById = () => {
  const router = useRouter();
  return useMutation(
    async (wordId: string) => {
      const { data } = await client.post("/words/getCardById", { wordId });
      return data;
    },
    {
      onSuccess: (data) => {
        if (!data.status) {
          router.push(ROUTES_OBJECT.configCard);
        }
      },
    }
  );
};

export const useDeleteWord = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => await client.post("/words/delete", { id }),
    {
      onSuccess: ({ data }) => {
        if (!data.status) {
          Swal.fire({
            icon: "error",
            title: "error",
            text: data.message,
          });
          return;
        }
        Swal.fire({
          icon: "success",
          title: "success",
          text: data.message ?? "Word Removed Successfully",
        });
        queryClient.invalidateQueries(["WORD_LIST"]);
      },
    }
  );
};

export const useMoveWord = () => {
  return useMutation(
    async (requestBody: {
      _id: string;
      isOk: boolean;
      category: CategoryEnum;
    }) => await client.post("/words/move", requestBody),
    {
      onSuccess: ({ data }) => {
        if (!data.status) {
          Swal.fire({
            icon: "error",
            title: "error",
            text: data.message,
          });
          return;
        }
      },
    }
  );
};
