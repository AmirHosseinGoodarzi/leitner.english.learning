import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import client from "@/utils/AxiosInterceptor";
import useAuth from "@/hooks/useAuth";
import { CategoryEnum } from "@/utils/enums";
import toast from "react-hot-toast";
import ROUTES_OBJECT from "@/utils/RoutesObject";
import useCategory from "@/hooks/useCategory";

export const useGetAllWords = () => {
  const category = useCategory();
  return useQuery(["WORD_LIST", category], async () => {
    const { data } = await client.post("/words", { category });
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
    async ({
      id,
      requestBody,
    }: {
      id?: string;
      requestBody: { front: string; back: string };
    }) => {
      const address = id ? `/words/addOrEdit/${id}` : "/words/addOrEdit";
      const { data } = await client.post(address, {
        user: user.email,
        ...requestBody,
      });
      return data;
    },
    {
      onSuccess: (response, value) => {
        if (response.status) {
          let message = "";
          if (!value.id) {
            message = "New word added";
          } else {
            message = `${value.requestBody.front} updated`;
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
  // const navigate = useNavigate();
  return useMutation(
    async (wordId: string) => {
      const { data } = await client.post("/words/getCardById", { wordId });
      return data;
    },
    {
      onSuccess: (data) => {
        if (!data.status) {
          // navigate(ROUTES_OBJECT.configCard);
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
      id: string;
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
