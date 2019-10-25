export const formatNumber = n => {
  const splitN = n.toString().split(".");
  let f = splitN[0].split("");

  if (f.length > 3) {
    for (let i = f.length - 1; i >= 0; i = i - 3) {
      if (i !== f.length - 1) {
        f.splice(i + 1, 0, ".");
      }
    }
  }
  const decimal =
    splitN[1] !== undefined
      ? splitN[1].length == 1
        ? splitN[1] + "0"
        : splitN[1]
      : "00";
  const formatedNum = f.join("") + "," + decimal;

  return formatedNum;
};

export const calculateSimulation = (amount, term, interest) => {
  const installment = calculateInstallment(amount, term, interest);
  const totalAmount = installment * term;
  const totalInterest = totalAmount - amount;

  const paymentPlan = calculatePaymentPlan(amount, term, interest, installment);

  return {
    installment: installment.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
    totalAmount: totalAmount.toFixed(2),
    paymentPlan
  };
};

export const calculateInstallment = (amount, term, interest) => {
  const effectiveInterest = (interest * 360) / 365;
  const R = effectiveInterest / 12 / 100;

  const installment = (amount * R) / [1 - Math.pow(1 + R, -term)];

  return installment;
};

export const checkAvailablePlans = (amount, terms, interest) => {
  const availableTerms = [];

  for (let i = 0; i < terms.length; i++) {
    const installment = calculateInstallment(amount, terms[i], interest);

    if (installment >= 5) {
      availableTerms.push(terms[i]);
    }
  }

  return availableTerms;
};

export const calculatePaymentPlan = (amount, term, interest, installment) => {
  const paymentPlan = [];

  for (let i = 0; i < term; i++) {
    const obj = {
      month: i + 1,
      capital: 0,
      interest: 0,
      installment
    };

    if (i === 0) {
      obj.capital = amount;
      obj.interest = ((amount * (interest / 100)) / 365) * 30;
    } else {
      obj.capital =
        paymentPlan[i - 1].capital -
        (paymentPlan[i - 1].installment - paymentPlan[i - 1].interest);
      obj.interest = ((obj.capital * (interest / 100)) / 365) * 30;
    }

    if (i === term - 1) {
      obj.installment = obj.capital + obj.interest;
    }

    obj.capital = obj.capital.toFixed(2);
    obj.interest = obj.interest.toFixed(2);
    obj.installment = obj.installment.toFixed(2);

    paymentPlan.push(obj);
  }

  return paymentPlan;
};
