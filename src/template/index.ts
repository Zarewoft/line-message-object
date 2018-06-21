import { ButtonTemplate, ButtonTemplateJSON } from "./button_template/button_template";
import { CarouselTemplate, CarouselTemplateJSON } from "./carousel_template/carousel_template";
import { ConfirmTemplate, ConfirmTemplateJSON } from "./confirm_template/confirm_template";
import { ImageCarouselTemplate, ImageCarouselTemplateJSON } from "./image_carousel_template/image_carousel_template";

type TemplateType = ButtonTemplate | CarouselTemplate | ConfirmTemplate | ImageCarouselTemplate;
type TemplateJSONType = ButtonTemplateJSON | CarouselTemplateJSON | ConfirmTemplateJSON | ImageCarouselTemplateJSON;

export { TemplateType, TemplateJSONType, ButtonTemplate, CarouselTemplate, ConfirmTemplate, ImageCarouselTemplate }
