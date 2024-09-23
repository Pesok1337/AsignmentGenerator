import { ControlType } from "./control-type.model";
import { OrgUnit } from "./org-unit.model";
import { ProductGroup } from "./product-group.model";
import { EventFreq } from "./event-freq.model";
import { SampleType } from "./sample-type.model";

export interface ControlTaskRecord {
    controlScheduleUid: string;
    controlType: ControlType;
    sampleType: SampleType; // Пока оставим как строку
    orgUnit: OrgUnit;
    organization: string; // Пока оставим как строку
    productGroup: ProductGroup;
    eventFreq: EventFreq["name"];
    startDate: Date;
    endDate: Date;
    isActive: boolean;
    description: EventFreq["description"];
  }
  