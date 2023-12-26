import { useReducer } from 'react';

const initialState = {
  balance: 0,
  loan: 0,
  isActive: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'openAccount':
      return {
        ...state,
        balance: action.payload,
        isActive: false,
      };

    case 'deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case 'withdraw':
      return {
        ...state,
        balance: state.balance > 0 ? state.balance - action.payload : 0,
      };

    case 'requestLoan':
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
      };

    case 'payLoan':
      return {
        ...state,
        balance: state.balance - state.loan,
        loan:  0,
      };

    case 'closeAccount':
      if (state.loan > 0 || state.balance !== 0) return state;
      return initialState
      

    default:
      throw new Error(`Unable to process!!`);
  }
};

export default function UseReducerChallenge() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div>
      <h1>UseReducer Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'openAccount', payload: 500 })}
        disabled={!isActive}
      >
        open account
      </button>
      <button
        className="btn btn-ui"
        disabled={isActive}
        onClick={() => dispatch({ type: 'deposit', payload: 150 })}
      >
        Deposit 150
      </button>
      <button
        className="btn btn-ui"
        disabled={isActive}
        onClick={() => dispatch({ type: 'withdraw', payload: 50 })}
      >
        withdraw 50
      </button>
      <button
        className="btn btn-ui"
        disabled={isActive}
        onClick={() => dispatch({ type: 'requestLoan', payload: 5000 })}
      >
        Request a loan of 5000
      </button>
      <button
        className="btn btn-ui"
        disabled={isActive}
        onClick={() => dispatch({ type: 'payLoan', payload: 5000 })}
      >
        pay loan
      </button>
      <button
        className="btn btn-ui"
        disabled={isActive}
        onClick={() => dispatch({ type: 'closeAccount' })}
      >
        close account
      </button>
    </div>
  );
}
