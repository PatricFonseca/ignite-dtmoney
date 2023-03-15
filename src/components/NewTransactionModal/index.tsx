import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
	CloseButton,
	Content,
	Overlay,
	TransactionType,
	TransactionTypeButton,
} from "./styles";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

const newTransactionFormSchema = z.object({
	description: z.string(),
	price: z.number(),
	category: z.string(),
	type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export default function NewTransactionModal() {
	const { createTransaction } = useContext(TransactionsContext);
	const {
		reset,
		control,
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<NewTransactionFormInputs>({
		resolver: zodResolver(newTransactionFormSchema),
	});

	async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
		createTransaction(data);
		reset();
	}

	return (
		<Dialog.Portal>
			<Overlay />

			<Content>
				<Dialog.Title>Nova transação</Dialog.Title>

				<CloseButton>
					<X size={24} />
				</CloseButton>

				<form onSubmit={handleSubmit(handleCreateNewTransaction)}>
					<input
						type="text"
						placeholder="Descrição"
						required
						{...register("description")}
					/>
					<input
						type="number"
						placeholder="Preço"
						required
						{...register("price", { valueAsNumber: true })}
					/>
					<input
						type="text"
						placeholder="Categoria"
						required
						{...register("category")}
					/>

					<Controller
						control={control}
						name="type"
						render={({ field }) => {
							return (
								<TransactionType
									onValueChange={field.onChange}
									value={field.value}
								>
									<TransactionTypeButton value="income" variant="income">
										<ArrowCircleUp size={24} />
										Entrada
									</TransactionTypeButton>

									<TransactionTypeButton value="outcome" variant="outcome">
										<ArrowCircleDown size={24} />
										Saída
									</TransactionTypeButton>
								</TransactionType>
							);
						}}
					/>

					<button type="submit" disabled={isSubmitting}>
						Cadastrar
					</button>
				</form>
			</Content>
		</Dialog.Portal>
	);
}
