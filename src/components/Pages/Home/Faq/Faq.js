import { Box } from "@mui/material";
import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import CreativeAccordion from "./CreativeAccordion";

const Faq = () => {
	return (
		<Box
			sx={{
				mb: 8,
			}}
		>
			<Box
				sx={{
					mb: 5,
				}}
			>
				<SectionTitle
					title="Frequently asked"
					colored="questions"
				></SectionTitle>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
				}}
			>
				<CreativeAccordion
					title="How do I pay Essentials or Premium plans?"
					description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci temporibus vero dolore maiores dignissimos accusamus atque voluptate voluptatum expedita recusandae."
				></CreativeAccordion>
				<CreativeAccordion
					title="How do I pay Essentials or Premium plans?"
					description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci temporibus vero dolore maiores dignissimos accusamus atque voluptate voluptatum expedita recusandae."
				></CreativeAccordion>
				<CreativeAccordion
					title="How do I pay Essentials or Premium plans?"
					description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci temporibus vero dolore maiores dignissimos accusamus atque voluptate voluptatum expedita recusandae."
				></CreativeAccordion>
			</Box>
		</Box>
	);
};

export default Faq;
