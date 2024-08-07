interface IBusinessContext {
  business: Table<"business"> | null;
}

interface IBusinessActionContext {
  setBusiness: React.Dispatch<SetStateAction<Business>>;
}
