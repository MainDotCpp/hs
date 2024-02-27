import { create, createStore } from 'zustand';
import { Prisma, t_page } from '@prisma/client';
import { produce } from 'immer';
import { savePage } from '@/actions/page-actions';

export const usePageStore = create<{
  page?: t_page;
  setPage: (page: t_page) => void;
  addComponents: (initialValue: Prisma.JsonObject) => void;
  currentIndex: number;
  removeComponent: (inx: number) => void;
  savePage: () => Promise<void>;
  setCurrentIndex: (inx: number) => void;
  currentComponent: Prisma.JsonObject | undefined;
  saveComponent: (value: any) => void;
}>((set, get) => ({
  // 页面数据
  page: undefined,
  // 当前组件索引
  currentIndex: 0,
  currentComponent: undefined,
  /**
   * 设置页面数据
   * @param page
   */
  setPage: (page: t_page) =>
    set(
      produce((state) => {
        state.page = page;
        state.currentComponent = page.content?.at(state.currentIndex);
        return state;
      }),
    ),

  /**
   * 页面添加一个组件
   * @param initialValue 组件初始化数据
   */
  addComponents: (initialValue: Prisma.JsonObject) => {
    set(
      produce((state) => {
        state.page.content.push(initialValue);
        return state;
      }),
    );
  },
  /**
   * 删除一个组件
   * @param inx
   */
  removeComponent: (inx: number) => {
    set(
      produce((state) => {
        state.page.content.splice(inx, 1);
        return state;
      }),
    );
  },

  /**
   * 保存页面
   */
  savePage: async () => {
    if (!get().page) new Error('当前页面不存在');
    // @ts-ignore
    return savePage(get().page);
  },
  saveComponent: (value: any) => {
    console.log(get().currentIndex);
    console.log(value);
    set(
      produce((state) => {
        // @ts-ignore
        state.page.content.splice(state.currentIndex, 1, value);
        console.log(state.page.content);
        return state;
      }),
    );
  },

  /**
   * 设置当前组件
   * @param inx
   */
  setCurrentIndex: (inx: number) => {
    set(
      produce((state) => {
        state.currentIndex = inx;
        state.currentComponent = state.page.content?.at(inx);
        return state;
      }),
    );
  },
}));
