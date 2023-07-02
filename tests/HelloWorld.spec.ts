import { describe, it, expect } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import { ref } from "vue";
import HelloWorldVue from "components/HelloWorld.vue";

describe("HelloWorld", () => {
  it('should return "yo" when calling getYo', async () => {
    const valueSelector = "#stepper-value";
    const buttonSelector = "#increment";

    const wrapper = mount(HelloWorldVue);

    expect(wrapper.find(valueSelector).text()).toContain(2);

    await wrapper.find(buttonSelector).trigger("click");

    expect(wrapper.find(valueSelector).text()).toContain(1);
  });
});
