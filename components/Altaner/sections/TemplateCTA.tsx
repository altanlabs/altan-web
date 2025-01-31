import ActionButton from "./ActionButton"
import { useTranslation } from "react-i18next";

const TemplateCTA = ({ templateId }: { templateId: string }) => {
  const handleClick = () => {
    window.open(`https://dashboard.altan.ai/?template=${templateId}`, '_blank');
  };
    const { t } = useTranslation(["common", "home"]);

    return (
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3">
            <ActionButton
                className="bg-blue-600 text-white rounded-full py-3 px-6 hover:bg-blue-700 transition-colors"
                onClick={handleClick}
            >
                {t("common:get_started_free")}
            </ActionButton>
            <ActionButton
                className="bg-white text-gray-700 border border-gray-300 rounded-full py-3 px-6 hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                icon="flat-color-icons:google"
                onClick={handleClick}
            >
                {t("common:google")}
            </ActionButton>
        </div>
    )
}

export default TemplateCTA;