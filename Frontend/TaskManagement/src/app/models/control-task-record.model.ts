import { ControlType } from "./control-type.model";
import { OrgUnit } from "./org-unit.model";
import { ProductGroup } from "./product-group.model";
import { EventFreq } from "./event-freq.model";

export interface ControlTaskRecord {
    id: number;
    controlType: ControlType;
    sampleType: string; // Пока оставим как строку
    orgUnit: OrgUnit;
    organization: string; // Пока оставим как строку
    productGroup: ProductGroup;
    taskFreq: EventFreq;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
    description: string;
  }
  