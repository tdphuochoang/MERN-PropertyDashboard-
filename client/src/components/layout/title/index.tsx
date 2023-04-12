import { TitleProps, useRouterContext } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import React from "react";

import logo from "../../../assets/logo.png";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
	const { Link } = useRouterContext();

	return (
		<Button fullWidth variant="text" disableRipple>
			<Link to="/">
				{collapsed ? (
					<img src={logo} alt="MyLogo" width="20px" />
				) : (
					<img src={logo} alt="Refine" width="70px" />
				)}
			</Link>
		</Button>
	);
};
