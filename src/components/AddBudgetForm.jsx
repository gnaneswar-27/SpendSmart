import React, { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";
import { CurrencyRupeeIcon } from "@heroicons/react/24/solid";


const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create budget</h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            required
            placeholder="e.g., Groceries"
            ref={focusRef}
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Budget Amount</label>
          <input
            type="number"
            name="newBudgetAmount"
            id="newBudgetAmount"
            step="0.1"
            placeholder="e.g., 	₹500"
            inputMode="decimal"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <span>Create budget</span>
              <CurrencyRupeeIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddBudgetForm;
