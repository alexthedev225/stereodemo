"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  CreditCard, 
  Lock, 
  Loader2 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

type PaymentFormProps = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  setPaymentStatus: (status: string | null) => void;
};

const PaymentForm = ({
  isLoading,
  setIsLoading,
  setPaymentStatus,
}: PaymentFormProps) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardError, setCardError] = useState("");

  // Formatage du numéro de carte en groupes de 4 chiffres avec des tirets
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Retirer tous les caractères non numériques
    if (value.length > 16) value = value.slice(0, 16); // Limiter à 16 chiffres
    // Séparer en groupes de 4 avec des tirets
    value = value.replace(/(\d{4})(?=\d)/g, "$1-");
    setCardNumber(value);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Retirer tous les caractères non numériques

    if (value.length > 2) {
      const month = value.slice(0, 2);
      const year = value.slice(2, 4);

      if (parseInt(month) > 12) {
        value = "12" + year;
      } else {
        value = `${month}${year ? `/${year}` : ""}`;
      }
    } else if (value.length === 1) {
      value = `0${value}`;
    }

    if (value.length > 5) value = value.slice(0, 5);

    setExpiryDate(value);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 3) value = value.slice(0, 3);
    setCvv(value);
  };

  const validateCard = () => {
    if (cardNumber.replace(/\D/g, "").length !== 16) {
      setCardError("Le numéro de carte n'est pas valide.");
      return false;
    }
    if (cvv.replace(/\D/g, "").length !== 3) {
      setCardError("Le code CVV est invalide.");
      return false;
    }

    const [month, year] = expiryDate.split("/").map((val) => val.trim());

    const monthNumber = Number(month);
    if (!month || isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
      setCardError("Le mois doit être entre 01 et 12.");
      return false;
    }

    const formattedMonth = month.padStart(2, "0");

    if (!year || isNaN(Number(year)) || year.length !== 2) {
      setCardError("L'année doit être un format à 2 chiffres.");
      return false;
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    if (
      Number(year) < currentYear ||
      (Number(year) === currentYear && Number(formattedMonth) < currentMonth)
    ) {
      setCardError("La carte a expiré.");
      return false;
    }

    setCardError("");
    return true;
  };

  const handlePayment = () => {
    if (!validateCard()) return;

    setIsLoading(true);
    setTimeout(() => {
      const isPaymentSuccessful = Math.random() > 0.2;
      setPaymentStatus(isPaymentSuccessful ? "success" : "failure");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card className="w-full bg-white shadow-lg border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <CreditCard className="h-6 w-6 text-pink-500" />
          <span>DÉMO - Ne pas entrer de vraies informations</span>
        </CardTitle>
        <CardDescription>
          Ceci est une démonstration. Aucune transaction réelle ne sera effectuée.
          N'entrez PAS de véritables données de carte bancaire.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div>
            <Label htmlFor="cardHolder" className="text-gray-700">
              Nom du titulaire
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Input
                    id="cardHolder"
                    type="text"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                    placeholder="Nom complet sur la carte"
                    className="mt-2"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  Entrez le nom exactement comme il apparaît sur la carte
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div>
            <Label htmlFor="cardNumber" className="text-gray-700">
              Numéro de carte
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Input
                    id="cardNumber"
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    className="mt-2"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  Saisissez les 16 chiffres de votre carte
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiryDate" className="text-gray-700">
                Date d&apos;expiration
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Input
                      id="expiryDate"
                      type="text"
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                      placeholder="MM/AA"
                      className="mt-2"
                    />
                  </TooltipTrigger>
                  <TooltipContent>Format MM/AA (mois/année)</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div>
              <Label htmlFor="cvv" className="text-gray-700">
                CVV
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Input
                      id="cvv"
                      type="text"
                      value={cvv}
                      onChange={handleCvvChange}
                      placeholder="CVV"
                      className="mt-2"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    Code de sécurité à 3 chiffres au dos de la carte
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {cardError && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm"
            >
              {cardError}
            </motion.p>
          )}

          <Button
            onClick={handlePayment}
            disabled={isLoading}
            className="w-full bg-pink-500 hover:bg-pink-600 mt-4"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Traitement...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4" />
                <span>Commander & Payer</span>
              </div>
            )}
          </Button>

          <div className="text-center text-xs text-gray-500 mt-2 flex items-center justify-center space-x-2">
            <Lock className="h-4 w-4" />
            <span>Paiement 100% sécurisé</span>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;
