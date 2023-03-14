import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import {
	PriceHighLight,
	TransactionContainer,
	TransactionTable,
} from "./styles";

export function Transaction() {
	const { transactions } = useContext(TransactionsContext);
	return (
		<>
			<Header />
			<Summary />

			<TransactionContainer>
				<SearchForm />
				<TransactionTable>
					<tbody>
						{transactions.map((transaction) => {
							return (
								<tr>
									<td width="50%">{transaction.description}</td>
									<td>
										<PriceHighLight variant={transaction.type}>
											{transaction.price}
										</PriceHighLight>
									</td>
									<td>{transaction.category}</td>
									<td>{transaction.createdAt}</td>
								</tr>
							);
						})}
					</tbody>
				</TransactionTable>
			</TransactionContainer>
		</>
	);
}
