import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import TextForm from "./TextForm";

test("type english characters", async () => {
    const value = ''

    const onChange = (text) => {
        console.log(text)
        expect(text).toBe("")
    }

    render(<TextForm title='test title' value={value} onChange={onChange} isError={false} filter={/[^ก-๙ ]/g} />)

    await userEvent.keyboard("lion")
})

test("type thai characters", async () => {
    const value = ''

    const onChange = (text) => {
        console.log(text)
        expect(text).toBe("ทดสอบ")
    }

    render(<TextForm title='test title' value={value} onChange={onChange} isError={false} filter={/[^ก-๙ ]/g} />)

    await userEvent.keyboard("ทดสอบ")
})

test("type thai and space characters", async () => {
    const value = ''

    const onChange = (text) => {
        console.log(text)
        expect(text).toBe("ทด สอบ")
    }

    render(<TextForm title='test title' value={value} onChange={onChange} isError={false} filter={/[^ก-๙ ]/g} />)

    await userEvent.keyboard("ทด สอบ")
})

test("type thai and english characters", async () => {
    const value = ''

    const onChange = (text) => {
        console.log(text)
        expect(text).toBe("ทดสอบ")
    }

    render(<TextForm title='test title' value={value} onChange={onChange} isError={false} filter={/[^ก-๙ ]/g} />)

    await userEvent.keyboard("ทดสอบ123")

})