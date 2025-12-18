export interface Context {
  currentTopElementIndex: number | null;
  setCurrentTopElementIndex: (topElementIndex: number) => void;
  telonOpen: boolean;
  setTelonOpen: (telonOpen: boolean) => void;
  changeElement: (to: "left" | "right") => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
