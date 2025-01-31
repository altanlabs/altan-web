import ROICalculator from "@/components/ROI/ROICalculator";
import styles from './style.module.scss';

export const metadata = {
	title: "ROI Calculator",
	description: "Calculate your return on investment with our easy-to-use ROI calculator.",
	viewport: "width=device-width, initial-scale=1",
};

const ROIPage = () => {
	return (
    <main className={styles.main}>
			<ROICalculator />
		</main>
	);
};

export default ROIPage;