export interface AdditionalFees {
  propertyTransferTax: string;
  legalFees: string;
  homeInspection: string;
  propertyInsurance: string;
  mortgageFees: string;
}

export interface MonthlyCosts {
  propertyTax: string;
  homeOwnerAssociationFee: string;
}

export interface TotalInitialCosts {
  listingPrice: string;
  additionalFees: string;
  downPayment: string;
  mortgageAmount: string;
}

export interface MonthlyExpenses {
  propertyTaxes: string;
  homeOwnerAssociationFee: string;
  mortgagePayment: string;
  propertyInsurance: string;
}

export interface PricingDetail {
  listingPrice: string;
  additionalFees: AdditionalFees;
  monthlyCosts: MonthlyCosts;
  totalInitialCosts: TotalInitialCosts;
  monthlyExpenses: MonthlyExpenses;
}

export const pricingDetails: PricingDetail[] = [
  {
    listingPrice: "1,250,000",
    additionalFees: {
      propertyTransferTax: "25,000",
      legalFees: "3,000",
      homeInspection: "500",
      propertyInsurance: "1,200",
      mortgageFees: "varies",
    },
    monthlyCosts: {
      propertyTax: "1,250",
      homeOwnerAssociationFee: "300",
    },
    totalInitialCosts: {
      listingPrice: "1,250,000",
      additionalFees: "29,700",
      downPayment: "250,000",
      mortgageAmount: "1,000,000",
    },
    monthlyExpenses: {
      propertyTaxes: "1,250",
      homeOwnerAssociationFee: "300",
      mortgagePayment: "Varies based on terms and interest rate",
      propertyInsurance: "100",
    },
  },
];
