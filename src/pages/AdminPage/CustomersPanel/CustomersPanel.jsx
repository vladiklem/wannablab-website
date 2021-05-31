import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "components/index";
import { updateLead } from "store/leads/actions";

import { LeadItem } from "./LeadItem/LeadItem";

export const CustomersPanel = ({ isPortable }) => {
    const dispatch = useDispatch();
    const { data: leads } = useSelector((state) => state.leads);
    const [searchValue, setSearchValue] = useState("");
    const [filteredLeads, setFilteredLeads] = useState(leads || []);

    const onChange = useCallback(
        (e) => {
            const value = e.target.value;
            setSearchValue(value);
            value
                ? setFilteredLeads(
                      filteredLeads.filter(
                          (item) =>
                              item.name.toLowerCase().includes(value) ||
                              item.phoneNumber.toLowerCase().includes(value),
                      ),
                  )
                : setFilteredLeads(leads);
        },
        [filteredLeads, leads],
    );

    const onUpdate = useCallback(
        (lead) => {
            dispatch(updateLead(lead));
        },
        [dispatch],
    );

    const [newLeads, oldLeads] = useMemo(
        () =>
            filteredLeads.reduce(
                ([a, b], item) => (item.status === "new" ? [[...a, item], b] : [a, [...b, item]]),
                [[], []],
            ),
        [filteredLeads],
    );

    useEffect(() => {
        setFilteredLeads(leads);
    }, [leads]);

    return (
        <article className="container">
            <Input
                value={searchValue}
                onChange={onChange}
                label="Знайти ліда"
                id="wannablab-search-input"
            />
            <div>
                {newLeads.map((item) => (
                    <LeadItem onUpdate={onUpdate} isPortable={isPortable} {...item} key={item.id} />
                ))}
                {oldLeads.map((item) => (
                    <LeadItem onUpdate={onUpdate} isPortable={isPortable} {...item} key={item.id} />
                ))}
            </div>
        </article>
    );
};
