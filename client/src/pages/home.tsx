import React from "react";
import { useList } from "@pankod/refine-core";

import {
	PieChart,
	PropertyReferrals,
	TotalRevenue,
	TopAgent,
	PropertyCard,
} from "components";
import { Box, Typography, Stack } from "@pankod/refine-mui";

const home = () => {
	return (
		<Box>
			<Typography fontSize={25} fontWeight={700} color="#11142D">
				Dashboard
			</Typography>

			<Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
				<PieChart
					title="Properties for Sale"
					value={684}
					series={[75, 25]}
					colors={["#e4e8ef", "#538DE1"]}
				/>
				<PieChart
					title="Properties for Rents"
					value={550}
					series={[60, 40]}
					colors={["#e4e8ef", "#7DAAD5"]}
				/>
				<PieChart
					title="Total customers"
					value={684}
					series={[70, 30]}
					colors={["#e4e8ef", "#62C3E7"]}
				/>
				<PieChart
					title="Properties for Cities"
					value={550}
					series={[75, 25]}
					colors={["#e4e8ef", "#C0DDE3"]}
				/>
			</Box>

			<Stack
				mt="25px"
				width="100%"
				direction={{ xs: "column", lg: "row" }}
				gap={4}
			>
				<TotalRevenue />
				<PropertyReferrals />
			</Stack>
		</Box>
	);
};

export default home;
