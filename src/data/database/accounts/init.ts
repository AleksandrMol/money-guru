import { Subscription } from "rxjs";
import { getAccountDb } from ".";
import { useEffect, useState } from "react";
import { IAccountCard } from "./interfaces/account-card";

/**
 * Инициализатор БД счетов
 */
export const useAccountDBInit = () => {
  
  const [accounts, setAccounts] = useState<IAccountCard[] | undefined>([]);

  const initializeDb = async () => {
    const accountDB = await getAccountDb();
  
    const subscription: Subscription = accountDB.accounts.find().$.subscribe(accounts => {
      console.log('accounts', accounts);
      setAccounts(accounts);
    });
  
    return () => subscription.unsubscribe();
  };

  useEffect(() => {
    initializeDb();
  }, []);

  return {
    accounts,
    setAccounts,

    initializeDb,
  }
}
