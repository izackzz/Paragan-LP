Source: https://boringui.dev/docs/records-table

RecordsTable React component - BoringUI
HomeHomeUI componentsUI componentsDesign InspirationDesign InspirationChangelogChangelog
System8Interface Cheat SheetInterface Cheat SheetFluid HoverFluid HoverMotionMotionScrollbarsScrollbarsSizesSizesSurfacesSurfacesTypographyTypographySkillSkill

Components57AccordionAccordionAskUserQuestionsAskUserQuestionsBadgeBadgeBannerBannerBlurNumberBlurNumberButtonButtonCarouselDotsCarouselDotsCheckboxGroupCheckboxGroupCodeBlockCodeBlockColorPickerColorPickerComboboxComboboxCommandMenuCommandMenuContextCardsContextCardsDialogDialogDiaTextDiaTextDiffTableDiffTableDropdownDropdownFilterTableFilterTableFineTuneCardFineTuneCardFlowchartFlowchartGradientSpinGradientSpinInputCopyInputCopyInputGroupInputGroupInputMessageInputMessageInputOTPInputOTPInsightCardsInsightCardsLoadingStateLoadingStateNeatAnnotationNeatAnnotationNumberFlowNumberFlowProgressiveBlurProgressiveBlurPromptBarPromptBarRadioGroupRadioGroupRecommendationCardRecommendationCardRecordsTableRecordsTableSearchListSearchListSelectSelectSelectionActionsSelectionActionsShaderSweepShaderSweepSidebarSidebarSidebarNavSidebarNavSimplePlayerSimplePlayerSliderSliderSlotTextSlotTextStreamingTextStreamingTextSwitchSwitchTableTableTabsTabsTabsSubtleTabsSubtleTaskRowsTaskRowsThinkingIndicatorThinkingIndicatorThinkingOrbThinkingOrbThinkingStateThinkingStateThinkingStepsThinkingStepsToastToastToolChipsToolChipsTooltipTooltipWobbleWobble

# RecordsTable

CRM-style grid with tags, sorting, relationships, and calculations.

## Installation

npx shadcn@latest add https://boringui.dev/r/base/records-table.json

Installs the Base UI flavor. Switch in the right panel.

## Preview

PreviewPreviewCodeCode

Inspect

0 companies selected

Company records with sortable and keyboard-resizable property columns
 | 
Company
 | 
Categories
 | 
Last interaction
 | 
Connection strength
 | 
Links
 | 

 | 1AAlpine Churn — Zürich | 

B2BGelatoWholesale+3
B2BGelatoWholesale
 | 4 days ago | Very strong | alpine-churn.example.com | 

 | 2AAmber Scoop — Prague | 

GelatoB2B+2
GelatoB2B
 | over 1 year ago | No communication | — | 

 | 3AAndes Snow Creamery — Quito | 

GelatoCatering+2
GelatoCatering
 | almost 2 years ago | Very weak | — | 

 | 4AApricot Atlas — Algiers | 

SorbetImports+2
SorbetImports
 | 11 months ago | Very weak | apricot-atlas.example.com | 

 | 5AAurora Scoops — Reykjavík | 

GelatoSeasonal+2
GelatoSeasonal
 | 9 days ago | Very strong | aurora-scoops.example.com | 

 | 6BBaltic Berry — Tallinn | 

Dairy-freeSeasonalB2C+3
Dairy-freeSeasonalB2C
 | 5 weeks ago | Weak | baltic-berry.example.com | 

 | 7BBlack Sesame Social — Bandung | 

VeganCafeB2C+3
VeganCafeB2C
 | 9 days ago | Very strong | black-sesame.example.com | 

 | 8BBlue Fig Gelato — Florence | 

GelatoCafe+2
GelatoCafe
 | over 1 year ago | Very weak | blue-fig.example.com | 

 | 9BBoreal Batch — Yellowknife | 

Dairy-freeLocalSeasonal+3
Dairy-freeLocalSeasonal
 | 8 days ago | Very strong | boreal-batch.example.com | 

 | 10CCacao Norte — Oaxaca | 

B2BLocalWholesale+3
B2BLocalWholesale
 | about 2 years ago | No communication | cacao-norte.example.com | 

 | 11CCape Vanilla Co. — Cape Town | 

WholesaleImports+2
WholesaleImports
 | over 1 year ago | Very weak | cape-vanilla.example.com | 

 | 12CCedar Spoon — Beirut | 

CafeLocalSeasonal+3
CafeLocalSeasonal
 | 6 days ago | Very strong | cedar-spoon.example.com | 

 | 13CCloudberry Cone — Helsinki | 

Dairy-freeSeasonal+2
Dairy-freeSeasonal
 | No contact | No communication | cloudberry-cone.example.com | 

 | 14CCoconut Commons — Manila | 

VeganB2CCafe+3
VeganB2CCafe
 | 24 days ago | Weak | coconut-commons.example.com | 

 | 15CCopper Cone — Melbourne | 

GelatoCafeB2C+3
GelatoCafeB2C
 | about 1 month ago | Weak | copper-cone.example.com | 

 | 16CCoral Coast Sorbet — Honolulu | 

SorbetLocal+2
SorbetLocal
 | 9 days ago | Very strong | coral-coast.example.com | 

 | 17CCrimson Clover — Brussels | 

GelatoWholesaleCatering+3
GelatoWholesaleCatering
 | 2 months ago | Weak | crimson-clover.example.com | 

 | 18DDelta Dairy Works — New Orleans | 

B2BWholesaleLocal+3
B2BWholesaleLocal
 | 2 days ago | Very strong | delta-dairy.example.com | 

 | 19DDolomite Dairy — Bolzano | 

GelatoWholesale+2
GelatoWholesale
 | 3 days ago | Very strong | dolomite-dairy.example.com | 

 | 20DDragonfruit Dock — Shenzhen | 

SorbetB2BWholesale+3
SorbetB2BWholesale
 | No contact | No communication | — | 

 | 21EEmber Cone Company — Seoul | 

B2CVegan+2
B2CVegan
 | 15 days ago | Weak | ember-cone.example.com | 

 | 22EEquator Cream — Kampala | 

B2BCateringLocal+3
B2BCateringLocal
 | 10 months ago | Very weak | equator-cream.example.com | 

 | 23FFjord Fizz Ice — Oslo | 

Dairy-freeSeasonal+2
Dairy-freeSeasonal
 | No contact | No communication | — | 

 | 24GGlacier Grove — Anchorage | 

SeasonalLocalCatering+3
SeasonalLocalCatering
 | 7 weeks ago | Weak | glacier-grove.example.com | 

 | 25HHibiscus House — Accra | 

SorbetCafe+2
SorbetCafe
 | 6 weeks ago | Weak | hibiscus-house.example.com | 

 | 26JJuniper & Cream — Vancouver | 

Dairy-freeCatering+2
Dairy-freeCatering
 | No contact | No communication | — | 

 | 27KKumo Creamery — Tokyo | 

B2CCafeVegan+3
B2CCafeVegan
 | 3 weeks ago | Very strong | kumo-creamery.example.com | 

 | 28LLagoon Ladle — Venice | 

GelatoSeasonalCatering+3
GelatoSeasonalCatering
 | 7 days ago | Very strong | lagoon-ladle.example.com | 

 | 29LLotus Leaf Scoops — Hanoi | 

VeganCafe+2
VeganCafe
 | 15 days ago | Weak | — | 

 | 30LLumen Soft Serve — Copenhagen | 

Dairy-freeCafe+2
Dairy-freeCafe
 | 8 months ago | Weak | lumen-soft-serve.example.com | 

 | 31MMango Moon Gelato — Nairobi | 

SorbetVegan+2
SorbetVegan
 | almost 2 years ago | Very weak | mango-moon.example.com | 

 | 32MMaple Orbit — Montréal | 

B2BWholesaleSeasonal+3
B2BWholesaleSeasonal
 | 15 days ago | Weak | maple-orbit.example.com | 

 | 33MMidnight Milk — Tromsø | 

Dairy-freeVeganWholesale+3
Dairy-freeVeganWholesale
 | No contact | No communication | — | 

 | 34MMint Medina — Tunis | 

Dairy-freeVeganLocal+3
Dairy-freeVeganLocal
 | No contact | No communication | — | 

 | 35MMonsoon Mango — Mumbai | 

SorbetVeganCatering+3
SorbetVeganCatering
 | 18 days ago | Weak | monsoon-mango.example.com | 

 | 36MMooncake Ice Cream — Singapore | 

B2BWholesale+2
B2BWholesale
 | about 1 month ago | Very weak | mooncake-ice-cream.example.com | 

 | 37NNomad Nougat — Ulaanbaatar | 

ImportsB2B+2
ImportsB2B
 | almost 2 years ago | No communication | nomad-nougat.example.com | 

 | 38OOlive Snow — Athens | 

GelatoCafeLocal+3
GelatoCafeLocal
 | 4 days ago | Very strong | olive-snow.example.com | 

 | 39OOrchard Cloud — Lyon | 

GelatoSeasonalCafe+3
GelatoSeasonalCafe
 | 5 days ago | Very strong | orchard-cloud.example.com | 

 | 40PPacific Pear — Valparaíso | 

SorbetSeasonal+2
SorbetSeasonal
 | 2 months ago | Weak | pacific-pear.example.com | 

 | 41PPalm Sugar Creamery — Bangkok | 

B2CVegan+2
B2CVegan
 | 3 months ago | Very weak | palm-sugar.example.com | 

 | 42PPampa Creamery — Córdoba | 

B2CLocal+2
B2CLocal
 | 12 months ago | Very weak | pampa-creamery.example.com | 

 | 43PPine & Pistachio — Istanbul | 

GelatoCatering+2
GelatoCatering
 | about 1 month ago | Very weak | — | 

 | 44QQuartz Cone — Denver | 

B2CWholesale+2
B2CWholesale
 | 10 days ago | Very strong | quartz-cone.example.com | 

 | 45RRed Lantern Creamery — Taipei | 

CafeVegan+2
CafeVegan
 | about 1 month ago | Weak | red-lantern.example.com | 

 | 46RRosewater Kulfi — Jaipur | 

B2CSeasonal+2
B2CSeasonal
 | 2 months ago | Very weak | — | 

 | 47SSaffron Sky Kulfi — Dubai | 

ImportsCatering+2
ImportsCatering
 | almost 2 years ago | Very weak | saffron-sky.example.com | 

 | 48SSahara Swirl — Marrakech | 

SorbetLocal+2
SorbetLocal
 | 5 months ago | Very weak | — | 

 | 49SSalt & Silk — Muscat | 

ImportsCateringGelato+3
ImportsCateringGelato
 | 8 months ago | Very weak | salt-and-silk.example.com | 

 | 50SSilk Road Sorbet — Tbilisi | 

SorbetImports+2
SorbetImports
 | about 1 month ago | Weak | silk-road.example.com | 

 | 51SSol y Nieve — Buenos Aires | 

GelatoLocal+2
GelatoLocal
 | 2 months ago | Weak | sol-y-nieve.example.com | 

 | 52SSunbird Gelateria — Lisbon | 

GelatoCafe+2
GelatoCafe
 | over 2 years ago | No communication | sunbird.example.com | 

 | 53TTamarind Tide — Chennai | 

VeganSorbetB2C+3
VeganSorbetB2C
 | 9 months ago | Very weak | tamarind-tide.example.com | 

 | 54TTasman Sea Gelato — Hobart | 

GelatoLocal+2
GelatoLocal
 | 2 months ago | Weak | tasman-sea.example.com | 

 | 55TTropic Churn — San Juan | 

SorbetLocalB2C+3
SorbetLocalB2C
 | 6 days ago | Very strong | tropic-churn.example.com | 

 | 56UUmber Cream — Warsaw | 

B2BWholesaleCafe+3
B2BWholesaleCafe
 | 5 weeks ago | Weak | umber-cream.example.com | 

 | 57VVanilla Vale — Antananarivo | 

ImportsLocal+2
ImportsLocal
 | No contact | No communication | — | 

 | 58WWillow Whip — Portland | 

Dairy-freeVeganCafe+3
Dairy-freeVeganCafe
 | 3 days ago | Very strong | willow-whip.example.com | 

 | 59YYuzu Yard — Kyoto | 

SorbetCafeSeasonal+3
SorbetCafeSeasonal
 | 11 days ago | Very strong | yuzu-yard.example.com | 

 | 60ZZenith Gelato — Auckland | 

GelatoSeasonal+2
GelatoSeasonal
 | 3 weeks ago | Weak | zenith-gelato.example.com | 

 | 60 count | Add calculation | — | 55% average | 48 links | 

## Source

Adapted from slev12397/beautiful-ui under the MIT License. Commercial icons were replaced and demo analytics were removed; attribution remains bundled with the component foundation.

## API Reference

 | Prop | Type | Default | Description

 | rows | RecordsTableRow[] | — | Company records to display.

 | fill | boolean | false | Fills the parent height.

 | onSelectionChange | (selectedIds: string[]) => void | — | Reports selected rows.

 | onSortChange | (sort: RecordsTableSort) => void | — | Reports sort changes.

 | onAddCalculation | () => void | — | Handles calculation creation.

## Make them yours
.dev

Theme

Radius

Size

Icons

Primitive
